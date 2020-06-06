# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)these are the controllers, blogspostcontroller is inheriting from the application controller
class BlogPostsController < ApplicationController
  def index
    # 2)http verb get: this controller method is to recieve all blog posts
    @posts = BlogPost.all
  end

  def show
    # 3)http verb get: this controller method is to specifically show one post rather than showing all of the blog posts - do this by using paramas
    @post = BlogPost.find(params[:id])
  end

  # 4) http verb get: this controller method new represents a midway point between C and R in CRUD and is the Rails convention for the route that displays a form to the user
  def new
  end

  def create
    # 5)http verb post: this controller method is to be able to create a new blog post to your database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6)method to redirect you to blog post create method rather than to staying on your deleted post...
      redirect_to blog_post_path(@post)
    end
  end

  # 7)adding strong params to manage exactly what goes into creating new object instances within your database
  private
  def blog_post_params
    # 8)requires a blog post and will only allow you to post a title and content to your post
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)Active Record takes data which is stored in a database table
class BlogPost < ApplicationRecord
  # 10)defining what you are going to interact with the data from database
  has_many :comments
end
