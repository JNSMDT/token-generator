// Characters allowed for the pw, with twice the possibility to get a letter or number
const CHARACTERSSTRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz01234567890123456789!“#$%&‘()*+,-./[|]^_`{}~:;<=>?@"
interface GeneratePasswordOptions{
  length: number
}


function generatePassword(options: GeneratePasswordOptions){
  const {length} = options
  // initialize uintArray
  const uIntArray = new Uint8Array(1)
  


  const pw = []
  let counter = 0
  while (counter < length){
    // fill array with random bytes
    crypto.getRandomValues(uIntArray)

    if (uIntArray[0] > CHARACTERSSTRING.length){
      continue
    }

    pw.push(CHARACTERSSTRING.charAt(uIntArray[0]))
    counter += 1
  }

  return pw.join('')
}

async function handleRequest(request: Request): Promise<Response> {
  // get querystring from request url
  const {searchParams} = new URL(request.url)
  // get pwlength from querystring (default is 20)
  const pwLength = searchParams.get('length') ?? 20
  // check if provided pwLength is a number

  if (Number.isNaN(Number(pwLength))){
    return new Response(`Length must be a number, you provided "${pwLength}"`)
  }

  // generate pw
  const pwGenOptions = {
    length: Number(pwLength)
  }
  const pw = generatePassword(pwGenOptions)
  return new Response(pw)
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
