import PrimaryButton from '@/Components/PrimaryButton';


export default function EventCard() {
    return (     
        <div className="flex-initial bg-tertiary-col p-6 text-left rounded-md w-2/6">

            <div className="flex flex-row w-full pb-3">
                <p className="flex-auto text-left text-xs">Keglez Co</p>
                <p className="flex-auto text-right text-xs">01/01/2024 17:00 - 19:00</p>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" alt="pizza" className='border-2 border-secondary-col rounded-md'/>

            <h1 className="text-lg py-3 truncate">Pizza Extravaganza</h1>
            <p className="line-clamp-3">Join us for a mouthwatering celebration of everyone's favorite comfort food - PIZZA! We are inviting you to indulge in an evening of delectable slices, good company, and unforgettable moments at our Pizza Party Extravaganza.</p>

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
                    <PrimaryButton value="button">More Info</PrimaryButton>
                </div>                            
            </div>
            
        </div>
    );
}