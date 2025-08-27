import CreateCategoryForm from "./CreateCategoryForm";

const CreateCategory = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <h1 className="ml-4 mr-4 md:ml-0 md:mr-0">Create Category</h1>
      {/* Content */}      
      <div className="flex flex-col ml-4 mr-4 md:ml-20 md:mt-20">
        <CreateCategoryForm />
      </div>
    </div>
  )
}

export default CreateCategory