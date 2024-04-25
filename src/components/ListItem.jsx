import Butten from "./Butten";
export default function ListItem({error, description}) {
    return (
    <li className='flex flex-wrap gap-3 flex-row w-full justify-between items-center'>
        <div className='max-w-prose'>
            <h3 className=' text-lg'>{error}</h3>
            <span className='text-sm'>{description}</span>
        </div>
        <Butten variant="input">Læs mere om fejlen</Butten>
    </li>
    );
}