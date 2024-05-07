import React, { useState } from 'react';
import Input from './Input';
import RuleCard1 from './RuleCard1';
import RuleCard2 from './RuleCard2';
import RuleCard3 from './RuleCard3';
import RuleCard4 from './RuleCard4';
import RuleCard5 from './RuleCard5';
import rules from '@/rules';

const Main = () => {
    const [valueFromRule,setValue]=useState('');

    const handleValueChange=(value1:any)=>{
        setValue(value1);
    }
  return (
    <div>
        <Input onValueChange={handleValueChange}/>

        {rules.rule1.ruleCheck(valueFromRule)?null:<RuleCard1 value={valueFromRule}/>}
        {rules.rule2.ruleCheck(valueFromRule)?null:<RuleCard2 value={valueFromRule}/>}
        {rules.rule3.ruleCheck(valueFromRule)?null:<RuleCard3 value={valueFromRule}/>}
        {rules.rule4.ruleCheck(valueFromRule)?null:<RuleCard4 value={valueFromRule}/>}
        {rules.rule5.ruleCheck(valueFromRule)?null:<RuleCard5 value={valueFromRule}/>}
        
    </div>
  )
}

export default Main