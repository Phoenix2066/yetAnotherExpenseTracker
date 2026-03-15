import { ArrowDownIcon, ArrowUpIcon, PencilSquareIcon} from "@heroicons/react/24/solid";

function TransacList({data}){
    console.log("Data:");
    console.log(data);
    return(
        <div className="transacContainer flex flex-col justify-start overflow-none w-full h-full">
            
            {data?.map((entry)=>{
                return(
                        <div key={entry.name} className="flex flex-row justify-between outline outline-black/20 items-center p-2 m-2 h-[3rem] w-full rounded-xl">
                            <div className="min-w-[20%]">{entry.name}</div>
                            <div className="min-w-[20%]">{entry.description}</div>
                            <div className="flex flex-row justify-between outline outline-black/20 items-center rounded-xl h-[2.5rem] p-3 m-5 min-w-[20%]"> 
                                <div className="m-4">{entry.time}</div>
                                <div className="m-4">{entry.date}</div>
                            </div>
                            <div className="min-w-[20%] flex flex-row justify-evenly">
                                {entry.type === "expense" ? 
                                    (<ArrowDownIcon className="h-5 w-5 text-red-500"/> ) 
                                    : (entry.type === "income" ? (<ArrowUpIcon className="h-5 w-5 text-green-500"/>)
                                            : (<></>))}
                                <p>{entry.amount}</p>
                            </div>
                            <button className="">
                                    <PencilSquareIcon className="h-5 min-w-5"/>
                            </button>
                        </div>
                    
                );
            })}
        </div>
    );
}

export default TransacList

/*<FontAwesomeIcon icon={byPrefixAndName.fas['down-long']} />*/