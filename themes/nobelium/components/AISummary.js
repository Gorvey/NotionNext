import React from 'react';
import Typed from 'typed.js';

const AISummary = props => {
  const summary = props?.post?.summary || ''
  const typing = React.useRef(null);
  const typed = React.useRef(null);


  React.useEffect(() => {
    const options = {
      strings: [summary],
      startDelay: 1000,
      showCursor: true,
      typeSpeed: 35,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(typing.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])



  return (
    summary ?
      <div className="ai-summary border p-3 bg-gray-100 rounded-xl mt-4 shadow-lg dark:bg-gray-900">
        <div className='flex items-center justify-between'>
          <div className='font-semibold'>
            <i
              className={`px-2 fas fa-book duration-500 transition-all `}></i>AI摘要
          </div>
          <a target='_blank' href='https://chatglm.cn/' className="shadow-sm ai-tag" rel="noreferrer">由 GLM-4 生成</a>
        </div>
        <div className="border text-base break-all my-2 ai-explanation rounded-xl bg-white p-2 shadow dark:bg-gray-700">
          <span ref={typing}></span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='text-xs text-gray-500'>此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结</div>
          {/* <div className='text-xs text-gray-600'>反馈</div> */}
        </div>
      </div >
      : <div ref={typing}></div>
  )
}
export default AISummary