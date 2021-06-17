import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Projects() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
  })

  async function onSubmit (data) {
    await axios.post("/api/contact", data);
  }

  return (
    <>
      <PageSeo
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/contact`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            You have suggestions, are interested or just wanna tell us something?
          </p>
        </div>

        <div className="container items-center px-5 py-12 lg:px-20">
          {isSubmitSuccessful && (
            <div className="container items-center">
              <div className="w-full text-green-600 border rounded-lg shadow-xl ">
                <div className="flex items-center justify-between px-6 py-4 mx-auto ">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-4 icon icon-tabler icon-tabler-circle-check"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M9 12l2 2l4 -4"></path>
                    </svg>
                    <p className="text-sm font-semibold tracking-wide uppercase ">
                      <strong>Note:</strong> Yes, your email has been sent.
                    </p>
                  </div>
                  <button
                    className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none"
                    type="button"
                    onClick={() => reset()}
                    aria-label="Close"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-circle-x"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M10 10l4 4m0 -4l-4 4"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-300 ease-in-out transform bg-white border rounded-lg lg:w-1/2 "
          >
            <div className="relative pt-4" data-children-count="1">
              <label htmlFor="email" className="text-base leading-7 text-gray-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@mail.com"
                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-300 ease-in-out transform rounded-lg bg-gray-50 border-gray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1623919072971-21"
                {...register('email')}
              />
            </div>
            <div className="relative mt-4" data-children-count="1">
              <label htmlFor="reason" className="text-base leading-7 text-gray-500">
                Reason <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
                placeholder="Why are you reaching out to us?"
                className="w-full px-4 py-2 mt-2 text-base text-black transition duration-300 ease-in-out transform rounded-lg bg-gray-50 border-gray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1623919072971-22"
                required={true}
                {...register('reason', { required: true, minLength: 12, maxLength: 120 })}
              />
              {errors.reason && (
                <p className="text-sm font-light text-red-400">
                  Must be 12 characters at minimum and 120 at most
                </p>
              )}
            </div>
            <div className="flex flex-wrap mt-4 mb-6 -mx-3">
              <div className="w-full px-3" data-children-count="1">
                <label className="text-base leading-7 text-gray-500" htmlFor="description">
                  {' '}
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  className="w-full h-32 px-4 py-2 mt-2 text-base transition duration-300 ease-in-out transform bg-gray-50 border rounded-lg border-gray-100 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Message..."
                  required={true}
                  {...register('description', { required: true, minLength: 20 })}
                ></textarea>
                {errors.description && (
                  <p className="text-sm font-light text-red-400">
                    This field is required, please write a short description of what you are trying
                    to tell us (minimum 20 characters)
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center w-full pt-4">
              <button
                type="submit"
                className={
                  'w-full py-3 text-base text-white transition duration-300 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ' +
                  (!isDirty || !isValid
                    ? 'bg-gray-100 border-gray-200 hover:bg-red-50 focus:ring-red-50 text-gray-300 cursor-not-allowed'
                    : '') +
                  (isSubmitting ? "bg-blue-500 animate-pulse duration-200" : "")
                }
              >
                {' '}
                {isSubmitting ? 'Submitting...' : 'Submit'}{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
