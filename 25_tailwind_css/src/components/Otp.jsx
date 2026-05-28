import { useState } from "react";
import { useRef } from "react"
import { Button } from "./button";

export function Otp({number}) {
    const ref = useRef(Array(number).fill(0));
    const [values,setValues] = useState(Array(number).fill(""));
    // this thing usestate is for backspace logic for u need to send these state variables down and front goin stops after clickng backspace

    const [disabled, setDisabled] = useState(true);
    return <div className="flex justify-center ">

        {Array(number).fill(1).map((x,index)=>
                <OtpBox 
                reference={(e)=> ref.current[index]=e}
                key={index}
                onDone={() => 
                    {
                    if(index+1 >= number)
                        {
                        return
                    }
                ref.current[index+1].focus();
            }}
            onBack={()=>{
                  if(index == 0)
                    {
                        return
                    }
                ref.current[index-1].focus();
        }}>
            </OtpBox>
        )}



       <br />
        <Button disabled={disabled}></Button>
    </div>
}

function OtpBox({
    reference, onDone,onBack
}) {
    const [inputBoxVal, setInputBoxVal] = useState("")
    return <div>
        <input value={inputBoxVal} ref={reference} 
        onKeyUp={(e)=>{
            if(e.key=="Backspace"){
                onBack();
            }
        }}
         onChange={(e) => {
            const val = e.target.value
            if (val == "") {
                // go back logic
                onBack()
            }
            else if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == "0") {
                setInputBoxVal(val);
                onDone();
            }
            else {
            }
            // onDone()
        }} type="text"
            maxLength={1}
            inputMode="numeric"
            className="w-[40px] h-[50px] m-2 rounded-2xl bg-red-500 text-2xl text-center outline-none" />
    </div>
}