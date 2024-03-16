import PrimaryButton from '@/Components/PrimaryButton';



export default function EventCard( props ) {

    var event, id, name, desc, orgi, date, thumb, slug;

    if (props.event_details != null) 
    {
        event = props.event_details;    

        id = event.event_id ? event.event_id : "Null";
        name = event.event_name ? event.event_name : "Null";
        desc = event.event_desc ? event.event_desc : "Null";   
        orgi = event.event_orgi ? event.event_orgi : "Null";
        date = event.event_date ? event.event_date : "Null";
        thumb = event.event_thumb ? event.event_thumb : "Null";
        slug = event.slug ? event.slug : "Null";
    }
    else
    {
        id = "Null";
        name = "Null";
        desc = "Null";
        orgi = "Null";
        date = "Null";
        thumb = "Null";
        slug = "Null";
    }

    return (     
        <div className="flex-initial bg-tertiary-col p-6 text-left rounded-md w-96">

            <div className="flex flex-row w-full pb-3">
                <p className="flex-auto text-left text-xs">{orgi}</p>
                <p className="flex-auto text-right text-xs">{date}</p>
            </div>

            <img src={thumb} alt="pizza" className='h-60 w-full object-cover border-2 border-secondary-col rounded-md'/>

            <h1 className="w-full text-lg py-3 truncate">{name}</h1>
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
                    <PrimaryButton value={slug}>More Info</PrimaryButton>
                </div>                            
            </div>
            
        </div>
    );
}