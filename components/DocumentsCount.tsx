import groq from 'groq';

export const query = groq`count(*[])`;

export function DocumentsCount({data}: {data: any}) {
    return (
        <strong>{data}</strong>
    )
};