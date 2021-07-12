const defineTypeOfMessage = (messageAuthorId, userId) => {
    return messageAuthorId === userId ? 'sent': 'received';
};

export default defineTypeOfMessage;
