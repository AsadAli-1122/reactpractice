import React, { useState } from 'react'
import Button from '../components/Button'



export default function Dashboard() {
    
    const OnChnage=(event)=>{
        setText(event.target.value);
    }
    const UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const LowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const Remove = () => {
        setText("");
    };

    
    const [text, setText] = useState('');
return (
    <>
    <div className="pt-20 md:ml-64 min-h-[100vh] bg-dark-gray">
        <div className="p-4">
            
        <div className="flex items-center justify-center mb-4 p-4 rounded bg-gray-50 bg-opacity-10">
            <p className="text-2xl text-syellow" >Dashboard</p>
        </div>
        
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 bg-opacity-10">
            <textarea name="subject" id="subject" cols="" rows="" className='w-full h-full rounded bg-transparent p-6 border-gray-600 focus:ring-0 focus:outline-none focus:border focus:border-syellow text-gray-400 overflow-y-scroll resize-none' placeholder="Write and convert something here." value={text} onChange={OnChnage} spellCheck={false}></textarea>
        </div>
        <div className='flex flex-wrap justify-center items-center mb-4'>
            <div onClick={UpperCase}>
            <Button btnText='Upper Case'/>
            </div>
            <div onClick={LowerCase}  className='mx-auto'>
            <Button btnText='Lower Case'/>
            </div>
            <div onClick={Remove}>
            <Button btnText='Remove'/>
            </div>
        </div>
        <div className="mb-4 p-4 rounded bg-gray-50 bg-opacity-10 text-white">
            <h1 className='text-3xl text-center text-syellow font-bold '>Summary</h1>
            <p>
                <span className='inline-block w-12'>{text.split(" ").length-1}</span>Words<br />
                <span className='inline-block w-12'>{text.length}</span>Characters<br />
                <span className='inline-block w-12'>{(0.008 * text.split(" ").length).toFixed(3)}</span>Minutes time takes to read this.
            </p>
        </div>
        <div className="mb-4 p-4 rounded bg-gray-50 bg-opacity-10 text-white">
            <h1 className='text-3xl text-center text-syellow font-bold '>Preview</h1>
            <p className='text-base text-gray-300'>
                {text}
            </p>
        </div>
        
        </div>
    </div>
    </>
  )
}
