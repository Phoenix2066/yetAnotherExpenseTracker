import "../index.css"

import Dashboard from "./dashboard";
import TransacList from "./transacList";

function Content({mode, data}){
    function chooseContent(){
        if(mode==="dashboard")
            return(<Dashboard data={data}/>);
        else
            return(<TransacList data={data}/> );
    }

    return(
        <div className='flex justify-between rounded-xl bg-white p-4 flex-row h-full m-2 outline outline-black/5 items-center'>
            {chooseContent()}
        </div>
    );
}

export default Content