const EventForms = () => {
  return (
    <>
    <div className="--mainForm w-[604px] h-[658px] flex flex-col mx-auto">
        <div className="sel--bar flex">
            <div className="reg--text flex flex-row gap-[390px] text-[#fafafa] p-[20px] text-nowrap">
                <span className="reg--title">Ticket Selcetion</span>
                <span className="reg--steps">Step 1/3</span>
            </div>
            <span className="reg--bar"></span>
        </div>
        <div className="event--card flex flex-col w-5/6 h-80 mx-auto">
            <div className="event--card-detail text-center bg-radial-[at_0%_20%] from-[#24A0B5] to-100% text-[#FAFAFA]" >
                    <h2 className="text-[32px] font-[600]">Techember Fest ”25</h2>
                 <p className="event--card-text text-[13px] font-[400]">
                    Join us for an unforgettable experience at<br /> [Event Name]! Secure your spot now.
                 </p>
            </div>
        </div>
        <div className="event--type flex flex-col w-5/6 h-80 mx-auto mt-[20px]">
            <span className="headline--three text-[#fafafa]">Select Ticket Type:</span>
            <div className="event--type-card mt-[10px] flex flex-row justify-around items-center gap-[10px] bg-[#052228] border-solid border-[#0E464F] border-2 p-[12px] rounded-[10px] text-[#fafafa]">
                <div className="event--type-box  w-[170px] h-[110px] border-solid border-[#0E464F] border-2 rounded-[10px] text-[14px]">
                    <div className="event--text flex flex-col pl-[10px] cursor-pointer">
                        <h3>Free</h3>
                        <span className="uppercase">Regular Access</span>
                        <span>20/52</span>
                    </div>
                </div>
                <div className="event--type-box w-[170px] h-[110px] border-solid border-[#0E464F] border-2 rounded-[10px] text-[14px]">
                    <div className="event--text flex flex-col pl-[10px] cursor-pointer">
                        <h3>$150</h3>
                        <span className="uppercase">Vip Access</span>
                        <span>20/52</span>
                    </div>
                </div>
                <div className="event--type-box w-[170px] h-[110px] border-solid border-[#0E464F] border-2 rounded-[10px] text-[14px]">
                    <div className="event--text flex flex-col pl-[10px] cursor-pointer">
                        <h3>$250</h3>
                        <span className="uppercase">Vvip Access</span>
                        <span>20/52</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="event--seat flex mt-[20px] flex-col w-5/6 h-80 mx-auto">
        <label className="headline--three text-[#fafafa]">
            Number of Tickets
            <select name="amout" id="" className="w-5/5 p-[8px] mt-[10px] outline-none bg-[#052228] text-[#fafafa] border-[#0E464F] border-2 rounded-[5px]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </label>
            
        </div>
        <div className="default--btn mt-[30px] flex flex-row gap-[30px] mx-auto">
            <button className="py-[10px] px-[100px] outline-1 outline-[#24A0B5] bg-transparent hover:bg-[#24A0b5]  border-none text-[#fafafa] rounded-[10px] cursor-pointer">Cancel</button>
            <button className="py-[10px] px-[100px] bg-[#24A0b5] hover:bg-[#184048] border-none text-[#fafafa] rounded-[10px] cursor-pointer">Next</button>
        </div>
    </div>
    </>
  )
}

export default EventForms