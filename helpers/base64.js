export const decodeBase64 = value => {
    const buff = Buffer.from(value, 'base64');
    return buff.toString('ascii');
}