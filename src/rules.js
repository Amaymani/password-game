var _ = require('lodash');
const rules = {
    rule1:{
        ruleNo:1,
        rule:"Password must be of 8 characters.",
        ruleCheck:function(input){
            if(_.size(input)>=8) return true;
            else return false;
        }
    },
    rule2:{
        ruleNo:2,
        rule:"Password must have one uppercase letter.",
        ruleCheck:function(input) {
            return _.some(input, (char) => /[A-Z]/.test(char));
          }
    },
    rule3:{
        ruleNo:3,
        rule:"Password must have one lowercase letter.",
        ruleCheck:function(input) {
            return _.some(input, (char) => /[a-z]/.test(char));
          }
    },
    rule4:{
        ruleNo:4,
        rule:"Password must have any special letter.",
        ruleCheck:function(str) {
            const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
            return _.some(str, (char) => specialCharRegex.test(char));
          }
    },
};



export default rules;