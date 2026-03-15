
function AddTransac({data, setData, setNewActive}){

    console.log(data);



    const refresh = ()=>{
        transacName.value = "";
        transacName.value = "";
        amt.value = "";
        desc.value = "";
        date.value = "";
        time.value = "";
        category.value = "none";
        type.value = "";
        
    };

    const submit = ()=>{
        const selectedType = document.querySelector('input[name="transacType"]:checked');

        const newTransaction = {
            name: transacName.value,
            amount: amt.value,
            description: desc.value,
            date: date.value,
            time: time.value,
            category: category.value,
            type: selectedType ? selectedType.value : ""
        };
        setData([...data, newTransaction]);
        setNewActive(false);
    };
    
    const cancel = () =>{
        setNewActive(false);
    };

    return(
        
        <>
            <div className="blur fixed bg-neutral-700 w-[100vw] h-[100vh] z-100 opacity-85">

            </div>
            <div className="fixed rounded-xl flex h-fit p-2 w-fit flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-200 bg-white border-black outline outline-black/5 items-center">
                <div className="flex justify-center rounded-xl text-3xl bg-white p-4 flex-row h-[10%] m-2 outline outline-black/5 w-full">
                    <h1>New Transaction</h1>
                </div>
                <div className="flex justify-between align-center rounded-xl bg-white p-2 flex-row m-2 w-full">
                        <h4 className="username text-l rounded-xl">Transac Name: </h4>
                        <input type="input" placeholder="Name" id="transacName" className="transacName text-xl font-medium text-black rounded-xl p-1 border-black"></input> {/*value={transacName} onChange={(e)=>{setTransacName(e.target.value)}*/}
                </div>
                <div className="flex justify-between align-center rounded-xl bg-white p-2 flex-row m-2 w-full">
                        <h4 className="username text-l rounded-xl">Amount: </h4>
                        <input type="input" placeholder="Amount" id="amt" className="amt text-xl font-medium text-black rounded-xl p-1 border-black"></input> 
                </div>
                <div className="flex justify-between align-center rounded-xl bg-white p-2 flex-row m-2 w-full h-fit">
                        <h4 className="username text-l rounded-xl">Description: </h4>
                        <input type="input" placeholder="Description" id="desc" className="desc text-xl font-medium text-black rounded-xl p-1 h-[5rem] border-neutral-950"></input>
                </div>
                <div className="flex flex-row justify-evenly">
                    <div>
                            <h4 className="username text-l rounded-xl ">Date: </h4>
                            <input type="input" placeholder="DD/MM/YYYY" id="date" className="date text-l font-medium text-black rounded-xl p-1 w-full" ></input>
                    </div>
                    <div>
                            <h4 className="username text-l rounded-xl ">Time: </h4>
                            <input type="input" placeholder="HH:MM" id="time" className="time text-l font-medium text-black rounded-xl p-1 w-full" ></input>
                    </div>
                    <div className="mx-2">                        
                        <label htmlFor="username">
                            <h4 className="username text-l rounded-xl">Category: </h4>
                            <select name="fruits" id="category" defaultValue="none" className="w-full text-l font-medium text-black rounded-xl p-1 w-full">
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                                <option value="none">none</option>
                            </select>
                        </label>
                    </div>
                    <div className="mx-2 w-fit">
                            <div className="flex flex-row">
                                <input type="radio" id="income" name="transacType" value="income" />
                                <label htmlFor="income">Income</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="radio" id="expense" name="transacType" value="expense" />
                                <label htmlFor="expense">Expense</label>
                            </div>
                    </div>
                </div>
                <br />
                <div className="flex flex-row justify-end w-full">
                    <button className="refresh mx-2" onClick={refresh}>Refresh</button>
                    <button className="cancel mx-2" onClick={cancel}>Cancel</button>

                    <button className="submit mx-2" onClick={submit}>Add Transaction</button>
                </div>
            </div>
        </>
    );
}

export default AddTransac