exports.run = function(inDat, callback) {
    console.log('Hello');
    var  list = [
        {prodNo: '1234', prodName: 'BB霜', manufactur: '韓國', price: 399, isUsed: true},
        {prodNo: '1234', prodName: '特級BB霜', manufactur: '韓國', price: 299, isUsed: false}
    ];

    callback( {errCode: 0,
            message: 'Ok',
            value: {list: list}} );
};
