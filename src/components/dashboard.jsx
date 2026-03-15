import Graph from "./Graph";

function Dashboard({data}){
    

    return(
        <div className="flex flex-row w-full h-full">
            <div className="InfoPane w-[20%] m-3 p-3 justify-between flex flex-col rounded-xl outline outline-black/20 items-center">
                <div>
                    <h1 className="text-4xl">Expense</h1>
                    <br />
                    <h1 className="text-4xl">Tracker</h1>                
                    <br />
                </div>
                <div>
                    Highest Transaction amount:
                </div>
                <div className="p-4">
                    Expenditure Catgeory ranking:
                    <ol className="list-decimal p-4">
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                    </ol>
                </div>
            </div>
            <div className="stats flex flex-col justify-between w-[80%] m-3 rounded-xl">
                <div className="graph rounded-xl h-[60%] outline outline-black/20 flex justify-center align-center">
                    <Graph data={data}/>
                </div>
                <div className="quickStats flex flex-row justify-between h-[40%]">
                    <div className="tile p-5 flex flex-col justify-between m-2 rounded-xl w-[30%] outline outline-black/20 items-center">
                        <h2 className="text-3xl">Total Debit</h2>{/* Tranfer to the account */}
                        <p className="text-5xl">Amt</p>
                    </div>
                    <div className="tile p-5 flex flex-col justify-between m-2 rounded-xl w-[30%] outline outline-black/20 items-center">
                        <h2 className="text-3xl">Total Credit</h2>{/* Tranfer from the account */}
                        <p className="text-5xl">Amt</p>
                    </div>
                    <div className="tile p-5 flex flex-col justify-between m-2 rounded-xl w-[30%] outline outline-black/20 items-center">
                        <h2 className="text-3xl">Acc Balance</h2>
                        <p className="text-5xl">Amt</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard