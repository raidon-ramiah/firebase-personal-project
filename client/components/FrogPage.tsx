import { useParams } from 'react-router-dom'

export default function FrogPage() {
  const { name } = useParams()
  console.log({ name })

  if (!name) {
    throw new Error('Missing param "name"')
  }

  return (
    <>
      <p>
        It&apos;s impossible to have a frog named {name}, the laws forbid it
      </p>
    </>
  )
}
