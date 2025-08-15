'use client'
import React, { useState } from 'react'

const webhoookURl =  'http://localhost:5678/webhook/feeling';



const FeelingInput = () => {


    // the input the user writes
    const [input, setInput] = useState("");

    // loading variable to use for loading dots while we wait for Gemeni to respond
    const [loading, setLoading] = useState(false);

    // the message retieved from the Agent and from the user
    const [msg, setMsg] = useState("");

    const handleSubmission = async (e: { preventDefault: () => void; })=>{
        e.preventDefault(); // important to prevent default form reload
        
        if(!input.trim()) return; //getting proper input without unnessecary spaces

        setLoading(true); // start the loading bubbbles

        try{
            const result = await fetch(webhoookURl, {
                method:'POST',
                headers:{'Content-type': 'application/json'},
                body: JSON.stringify({message: input}),
            })

            if(!result.ok){console.log(`Error= ${result.status}`)}

            const data = await result.text();

            setMsg(data);

        }
        finally{
            setLoading(false);
        }

    }

    

  return (
    <div className="w-fit m-10">
        <form
            className='join rounded-2xl'
            id='feelingsFrom'
            onSubmit={handleSubmission}> 
            <input 
                className="input input-lg w-full join-item" 
                placeholder="How we feeling today love?"
                value={input}
                onChange={(e) => setInput(e.target.value)}/>

            <button 
                type='submit'
                className='btn btn-lg self-center  join-item'
                disabled={loading}>Send</button>
        </form>

        <div>
            <br/>
            {loading ? (
                <div className="chat chat-start">
                    <span className="loading chat-bubble loading-dots"></span>
                </div>
            ):(
                <div className='chat chat-start flex bg-neutral rounded-2xl mt-4 p-2 whitespace-pre-line'> {msg} </div>
                )}
        </div>
            
    </div>
  )
}

export default FeelingInput