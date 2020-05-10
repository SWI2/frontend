// Module taken from https://github.com/oacore/dashboard/blob/master/api/index.js
import { NetworkError } from './errors'

const API_URL = 'https://sw2-project-backend.herokuapp.com/api'

const prepareUrl = (pathname, base = API_URL) => {
  const url = /^\w+:\/\//.test(pathname) ? pathname : `${base}${pathname}`
  return new URL(url)
}

const prepareParams = ({ url, searchParams }) =>
  new URLSearchParams([
    ...Array.from(url.searchParams.entries()),
    ...Array.from(new URLSearchParams(searchParams).entries()),
  ])

const prepareMethod = ({ method = 'GET' }) => method.toUpperCase()

const prepareBody = ({ method, body }) => {
  if (!['GET', 'HEAD'].includes(method))
    return typeof body == 'object' ? JSON.stringify(body) : body
  return null
}

const prepareHeaders = ({ headers: customHeaders, body }) => {
  const defaultHeaders = { Accept: 'application/json' }
  const contentHeaders =
    typeof body == 'object' && body != null
      ? { 'Content-Type': 'application/json' }
      : {}

  return {
    ...defaultHeaders,
    ...contentHeaders,
    ...customHeaders,
  }
}

const prepareRequest = init => {
  const request = {}

  request.url = prepareUrl(init.url, API_URL)
  request.url.search = prepareParams({ ...init, url: request.url })
  request.url = request.url.toString()
  request.method = prepareMethod(init)
  request.headers = prepareHeaders(init)

  const body = prepareBody({ ...init, method: request.method })
  if (body != null) request.body = body

  // request.credentials = 'include'

  return { ...init, ...request }
}

const processStatus = response => {
  if (response.status >= 400) {
    const Error = NetworkError.getErrorFromStatusCode(response.status)
    throw new Error(
      `Request for ${response.url} failed on ${response.status}`,
      response
    )
  }

  return response
}

const processBody = (response, { method }) => {
  const { headers } = response
  const type = headers.get('Content-Type')

  return (/application\/([\w.-]\+)?json/g.test(type) && method !== 'HEAD'
    ? response.json()
    : response.blob()
  ).then(data => ({ data, type, headers }))
}

const executeRequest = ({ url, ...options }) =>
  fetch(url, options)
    .then(processStatus)
    .then(response => processBody(response, { ...options }))

const performRequest = (url, options) => {
  const request = prepareRequest({ url, ...options })
  return executeRequest(request)
}

export default performRequest
