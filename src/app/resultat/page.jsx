import Image from 'next/image';
import ListItem from '@/components/ListItem';

export const revalidate = 1800;

export default function Resultat() {


    const data = require('./dummyData.json');
    const violations = data.violations;
    const critical = violations.filter(one => one.impact === 'critical')
    const serious = violations.filter(one => one.impact === 'serious')
    const major = critical.concat(serious)
    const moderate = violations.filter(one => one.impact === 'moderate')
    const minor = violations.filter(one => one.impact === 'minor')

    return (
    <>
        <section className="px-0 my-10">
            <article className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                <figure className="flex flex-col w-auto justify-end place-content-right gap-y-2 md:order-2">
                    <Image className="w-auto object-contain" src="/dummyImg.svg" alt="Logo" width="300" height="300" />
                    <h3 className='w-auto text-lg text-center'>Overall score</h3>
                </figure>
                <figure className="flex flex-col place-content-center gap-y-2 md:order-1">
                    <h2 className="text-xl text-state-2">{data.url}</h2>
                    <p className='text-pretty'></p>
                    <Image className="w-auto object-contain" src="/dummyImg.svg" alt="Logo" width={data.screenshot.width} height={data.screenshot.height}/>
                </figure>
            </article>
        </section>

        <section className='flex flex-col gap-y-6 my-14 px-0'>
            <h2 className='text-2xl'>Fuld raport </h2>
            {major.length != 0 && (
                <details className='bg-state-3-light'>
                    <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-3 after:content-[">"]'><div><span>{major.length}</span> kritiske fejl</div></summary>
                    <ul className='flex flex-col gap-y-8 p-6 my-3 mx-5'>
                        {major.map((d) => (
                            <ListItem key={d.id} error={d.id} description={d.description} />
                        ))}
                    </ul>
                </details>
            )}
            {moderate.length != 0 && (
                <details className='bg-state-2-light'>
                    <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-2 after:content-[">"]'><div><span>{moderate.length}</span> moderate fejl</div></summary>
                    <ul className='flex flex-col gap-y-6 p-6 my-3 mx-5'>
                    {moderate.map((d) => (
                            <ListItem key={d.id} error={d.id} description={d.description} />
                        ))}
                    </ul>
                </details>
            )}
            {minor.length != 0 && (
            <details className='bg-state-1-light'>
                <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-1 after:content-[">"]'><div><span>{minor.length}</span> mindre fejl</div></summary>
                <ul className='flex flex-col gap-y-6 p-6 my-3 mx-5'>
                {minor.map((d) => (
                        <ListItem key={d.id} error={d.id} description={d.description} />
                    ))}
                </ul>
            </details>
            )}
        </section>
    </>
)
}
