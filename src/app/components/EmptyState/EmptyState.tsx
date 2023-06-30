import Image from 'next/image'

export const EmptyState = () => {
    return (
<Image
      src="/empty.png"
      width={200}
      height={200}
      alt="Picture of the author"
    />
    )
}