import React from 'react'
import rules from '@/rules';

interface RuleCardtProps {
  value: string;
}

const RuleCard3: React.FC<RuleCardtProps>  = ({value}) => { 
  return (
    <div className='flex justify-center text-mainhead items-center mt-8'>
      {rules.rule3.ruleCheck(value)?null:
      <div className='bg-mainhead rounded-xl'>
        <div className='w-[50vb] heading font-medium p-2 pl-5 text-bgmain'>Rule no: {rules.rule3.ruleNo}</div>
        <div className='w-[50vb] heading font-medium p-5 text-mainhead bg-bgmain border-mainhead border-2 rounded-b-xl'>{rules.rule3.rule}</div>
      </div>}
    </div>
  )
}

export default RuleCard3;