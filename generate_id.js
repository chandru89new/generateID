// options.length should be <= 64 and >= 4
// options.type should be ['loweralpha', alpha', 'loweralphanumeric', 'alphanumeric', 'numeric']
// if these conditions are not met, defaults will be used.

function generateID(options) {
    return new Promise((resolve, reject) => {
        let length, chars, random, result = '';
        
        // set the defaults
        // if options exists, we'll reset these defaults in the next segment of the code
        length = 64;
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
        
        // if options exists
        if (options) {
            
            // enforce length
            if (options.length && options.length != undefined && options.length >= 4 && options.length <= 64) {
                length = options.length;
            }
            
            // get options.type
            switch (options.type) {
                case 'loweralpha':
                chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
                break;
                case 'alpha':
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                break;
                case 'loweralphanumeric':
                chars = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
                break;
                case 'alphanumeric':
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
                break;
                case 'numeric':
                chars = '1234567890'.split('');
                break;
                default:
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
                break;
            }
        }    
        
        // now randomize from chars x length times
        // get a random number between 0 and chars.length-1
        // pick that array index from chars
        // join that in the resultId
        // do this for length times
        for (i=0; i<length; i++) {
            random = Math.floor(Math.random()*chars.length);
            result = result + chars[random];
        }

        // this is where you would add your function to validate the generated Id for things (like "uniqueness" if you are using the generated ID as a primary key value)
        var checkO = function (){
            if (result.indexOf('O') > -1) {
                resolve(result);
            }
            else {
                reject("Try again. Generated Id did not have the character 'O' [caps o]");
            }
        }
        checkO();
    });
}