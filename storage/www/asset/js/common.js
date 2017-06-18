;
(function (global) {

    function _createParameter(queryString) {
        var param = {};
        if (queryString) {
            var parts = queryString.split('&');
            for (var i = 0; i < parts.length; i++) {
                var part = parts[i];
                var keyVal = part.split('=');
                if (keyVal.length == 2) {
                    param[keyVal[0]] = keyVal[1];
                    param[i] = keyVal[1];
                } else {
                    param[keyVal] = '';
                    param[i] = '';
                }
            }
        }
        return param;
    }

    function _QueryString() {
        var queryString = '';
        if (global.location.search) {
            queryString = global.location.search.substr(1);
        }
        this._params = _createParameter(queryString);
    }

    _QueryString.prototype.get = function (name) {
        console.log(this._params);
        return this._params[name] || '';
    };

    global.QueryString = _QueryString;

})(this);