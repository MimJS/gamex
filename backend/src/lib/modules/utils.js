const { VkAppSecretKey } = require('../configs/config.main');

const qs = require('querystring');
const crypto = require('crypto');

const checkVkHashValid = (userId, queryString) => {
    const urlParams = qs.parse(queryString);
    const ordered = {};
    Object.keys(urlParams)
        .sort()
        .forEach((key) => {
            if (key.slice(0, 3) === 'vk_') {
                ordered[key] = urlParams[key];
            }
        });

    const stringParams = qs.stringify(ordered);
    const paramsHash = crypto
        .createHmac('sha256', VkAppSecretKey)
        .update(stringParams)
        .digest()
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=$/, '');

    return paramsHash === urlParams.sign && urlParams.vk_user_id == userId;
};

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomBonus = (arr) => {
    min = Math.ceil(arr[0]);
    max = Math.floor(arr[1]);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = {
    checkVkHashValid,
    getRandomNumber,
    getRandomBonus,
};
