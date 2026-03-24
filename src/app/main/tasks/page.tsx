"use client";

export default function TaskPage () {

    const tasks = [
        {id: "Register", text: "Complete registration on BIONIX", price: 1000, status: "UNCOMPLETED"},
        {id: "1 Friend", text: "Invite 1 friend", price: 3000, status: "UNCOMPLETED"},
        {id: "10 Friend", text: "Invite 1 friend", price: 5000, status: "UNCOMPLETED"},
    ]

    return(<>
        

        <div className="w-1/2 h-full fixed top-32 rounded-[10px] pt-8 items-center bg-[#1C1C1C]">

            {tasks.map((task) => (

                <div className="pb-8">

                    <div className="w-full flex flex-row justify-between items-center px-8">

                        {task.text}

                        <div className="w-fit flex flex-row items-center gap-6">
    
                            {`+ ${task.price} NIX`}
    
                            <button className="bg-white text-black hover:opacity-80 rounded-[10px] px-4 py-2 transition-opacity">
        
                                Claim

                            </button>

                        </div>

                    </div>

                    <div className="w-full h-1 bg-black mt-4"/>

                </div>

            ))}

        </div>


    </>)

}