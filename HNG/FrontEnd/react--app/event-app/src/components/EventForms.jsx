const EventForms = () => {
  return (
    <>
    <div className="--mainForm w-1/2 h-9/10 flex flex-col mx-auto">
        <div className="sel--bar">
            <div className="reg--text">
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
        <div className="event--type flex flex-col w-5/6 h-80 mx-auto mt-[10px]">
            <span className="headline--three text-[#fafafa]">Select Ticket Type:</span>
            <div className="event--type-card mt-[10px] flex flex-row justify-around items-center bg-[#052228] border-solid border-[#0E464F] border-2 p-[12px] rounded-[10px] text-[#fafafa]">
                <div className="event--type-box flex flex-col w-[150px] h-[110px] border-solid border-[#0E464F] border-2 rounded-[10px] text-[14px]">
                    <h3>Free</h3>
                    <span>Regular Access</span>
                    <span>20/52</span>
                </div>
                <div className="event--type-box flex flex-col w-[150px] h-[110px] border-solid border-[#0E464F] border-2 rounded-[10px] text-[14px]">
                    <h3>Free</h3>
                    <span>Regular Access</span>
                    <span>20/52</span>
                </div>
                <div className="event--type-box flex flex-col w-[150px] h-[110px] border-solid border-[#0E464F] border-2 rounded-[10px] text-[14px]">
                    <h3>Free</h3>
                    <span>Regular Access</span>
                    <span>20/52</span>
                </div>
            </div>
        </div>

        <div className="event--seat">
            <select name="amout" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div className="default--btn">
            <button>Cancel</button>
            <button>Next</button>
        </div>
    </div>
    </>
  )
}

export default EventForms