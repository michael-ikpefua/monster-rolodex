

export const Searchbox = ({filter, placeholder}) => (
    <>
        <input type="search" className='search' placeholder={placeholder} onChange={filter} />
    </>
)