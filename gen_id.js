var ID = {
    type: 'alphanumeric',
    length: 64,
    list: [],
    lastID: '',
    generate: function(){
        // check if type is OK
        // check if length is in the range (4,64)
        // generate a random ID
        // check if ID is in the list
            // if yes, regenerate ID
        // return ID

        var _type = ['numeric', 'alphanumeric', 'alpha', 'loweralpha', 'loweralphanumeric'];
        if (_type.indexOf(this.type) < 0) {
            this.type = 'alphanumeric'
        }

        if (!this.length || this.length < 4 || this.length > 512) {
            this.length = 64;
        }

        // generate random ID
        // get chars array based on this.type
        // then, for the length of this.length, 
        // pick a random index in chars.length
        // push the value into a result var
        // final out = result var

        var _lowerAlpha = 'abcdefghijklmnopqrstuvwxyz',
            _capsAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            _numbers = '0123456789';

        switch (this.type) {
            case 'numeric':
                var _chars = _numbers;
                break;
            case 'alpha':
                var _chars = _lowerAlpha + _capsAlpha;
                break;
            case 'alphanumeric':
                var _chars = _lowerAlpha + _capsAlpha + _numbers;
                break;
            case 'loweralpha':
                var _chars = _lowerAlpha;
                break;
            case 'loweralphanumeric':
                var _chars = _lowerAlpha + _numbers;
                break;
            default:
                var _chars = _lowerAlpha + _capsAlpha + _numbers;
                break;
        }

        var _result = '';
        for (i = 0; i < this.length; i++) {
            var c = _chars[Math.floor(Math.random()*_chars.length)];
            _result = _result + c;
        }

        // checking if the generated ID is already in the list
        if (this.list.indexOf(_result) < 0) { // it's not
            this.list.push(_result);
            this.lastID = _result;
            return _result;
        }
        else {
            return this.generate();
        }
    },
    flush: function(){
        return this.list = [];
    },
    reset: function(){
        this.type = 'alphanumeric';
        this.length = 64;
        this.lastID = '';
        this.list = [];
    }
}