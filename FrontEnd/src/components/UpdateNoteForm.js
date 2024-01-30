import noteStore from '../stores/noteStore';
import '../styles/updateNoteForm.css'
function UpdateNoteForm() {
    // store 
    const store = noteStore();
  return (
    <>
    {store.noteUpdateFormData._id && (
          <div className="">
<form class="max-w-lg mx-auto border p-6 mt-4 shadow-lg flex flex-col gap-2">
  <div>
          <h1 className='text-black text-center text-3xl font-bold'>Notes</h1>
    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Note Tile</label>
    <input type="text" id="createIdeaTitle"
    name="title"

                  value={store.noteUpdateFormData.title}
                  onChange={store.setUpdateFormData} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Note Title..." required /></div>
                  <div>
  <label for="body" class="block mb-2 text-sm font-medium text-gray-900 ">Note Description</label>

  <textarea id="createIdeaBody"
   name="body"
                  value={store.noteUpdateFormData.body}
                  onChange={store.setUpdateFormData} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a Description..."></textarea>
                  </div>
  <button id="" onClick={store.updateNote}  type="submit" class="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Update</button>
  <button id="" onClick={store.cancelUpdateNote}  type="submit" class="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Cancel</button>

</form>
  </div>

        )}

     
    </>
  );

}
export default UpdateNoteForm;