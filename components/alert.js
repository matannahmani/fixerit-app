import Link from 'next/link';

export default function Alert({ preview }) {
  if (preview)
   return(
    <div class="alert alert-danger float-bottom" role="alert">
      Preview Mode <Link href="/api/exit-preview"><a class="alert-link">Click Here</a></Link> To Exit.
    </div>
  )
  else
  return null
}
