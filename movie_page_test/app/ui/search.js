'use client';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams);
        
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
            if (params.get('page')) params.delete('page');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300)


    return (
        <label >
        Title search:&nbsp;&nbsp;
        <input 
        id="search"
        type="text"  
        name="search" 
        placeholder="Search movie titles"
        onChange={(e) => {
            handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('search')?.toString()}
        />
        </label>
    )
}