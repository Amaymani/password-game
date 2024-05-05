import React, { useState } from 'react';
import Input from './Input';
import RuleCard1 from './RuleCard1';
import RuleCard2 from './RuleCard2';
import RuleCard3 from './RuleCard3';
import rules from '@/rules';

const Main = () => {
    const [valueFromRule,setValue]=useState('');

    const handleValueChange=(value1:any)=>{
        setValue(value1);
    }
  return (
    <div>
        <Input onValueChange={handleValueChange}/>

        <RuleCard1 value={valueFromRule}/>
        <RuleCard2 value={valueFromRule}/>
        <RuleCard3 value={valueFromRule}/>
        
    </div>
  )
}

export default Main