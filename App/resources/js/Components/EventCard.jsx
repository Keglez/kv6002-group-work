import PrimaryButton from '@/Components/PrimaryButton';



export default function EventCard( props ) {

    var event = props.event_details;

    var id = event.event_id;
    var name = event.event_name;
    var desc = event.event_desc ;   
    var orgi = event.event_orgi;
    var date = event.event_date;
    var thumb = event.event_thumb;


    return (     
        <div className="flex-initial bg-tertiary-col p-6 text-left rounded-md w-2/6">

            <div className="flex flex-row w-full pb-3">
                <p className="flex-auto text-left text-xs">{orgi}</p>
                <p className="flex-auto text-right text-xs">{date}</p>
            </div>
            <img src={thumb} alt="pizza" className='border-2 border-secondary-col rounded-md'/>

            <h1 className="text-lg py-3 truncate">{name}</h1>
            <p className="line-clamp-3">{desc}</p>

            <div className="flex flex-row pt-4 items-center">
                <div className="flex flex-row space-x-2">                                
                    <span className="mx-auto text-primary-col text-2xl">
                        ★
                    </span>
                    <span className="mx-auto text-primary-col text-2xl">
                        ★
                    </span>
                    <span className="mx-auto text-primary-col text-2xl">
                        ★
                    </span>
                    <span className="mx-auto text-primary-col text-2xl">
                        ★
                    </span>
                    <span className="mx-auto text-primary-col text-2xl">
                        ★
                    </span>
                    
                </div>
                <div className="ml-auto">
                    <PrimaryButton value="button" id={id}>More Info</PrimaryButton>
                </div>                            
            </div>
            
        </div>
    );
}