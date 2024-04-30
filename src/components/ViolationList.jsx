import Butten from "./Butten";
export default function ViolationList({error, description}) {
    return (
    <li className='flex flex-wrap gap-3 flex-row w-full justify-between items-center'>
        <div className='w-full md:w-2/6'>
            <h3 className='text-lg first-letter:uppercase'>{error}</h3>
            <p className='text-sm'>{description}</p>
        </div>
        <Butten path="regler" variant="primary">Læs mere om fejlen</Butten>
    </li>
    );
}