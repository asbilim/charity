export default function DonateHeader({user="george"}){
    return (
        <div className="w-full p-4 px-6 flex items-center justify-between text-xl bg-transparent">
            <div className="breadcrumb">
                <div className="text-base font-medium breadcrumbs">
                    <ul>
                        <li><a>Home</a></li> 
                        <li><a>Donate</a></li> 
                        <li>{user}</li>
                    </ul>
                </div>
            </div>
            <div className="call">
                <button className="bg-[#3772FF] text-[#FCFCFD] px-8 py-2 rounded-md font-medium">
                    Become a coinpay member
                </button>
            </div>
        </div>
    )
}