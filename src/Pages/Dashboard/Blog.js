import React from "react";

const Blog = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl p-10">Questions</h1>
            <div className="space-y-5 p-10">
                <div
                    tabindex="0"
                    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                >
                    <div class="collapse-title text-xl font-medium">
                        How will you improve the performance of a React
                        Application?
                    </div>
                    <div class="collapse-content">
                        <p>
                            1. Keeping component state local where necessary{" "}
                            <br />
                            2. Memoizing React components to prevent unnecessary
                            re-renders <br />
                            3. Code-splitting in React using dynamic import(){" "}
                            <br />
                            4. Windowing or list virtualization in React <br />
                            5. Lazy loading images in React
                        </p>
                    </div>
                </div>
                <div
                    tabindex="0"
                    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                >
                    <div class="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React
                        application?
                    </div>
                    <div class="collapse-content">
                        <p>
                            There are four main types of state you need to
                            properly manage in your React apps: <br />
                            1. Local state <br />
                            2. Global state <br />
                            3. Server state <br />
                            4. URL state <br />
                        </p>
                    </div>
                </div>
                <div
                    tabindex="0"
                    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                >
                    <div class="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React
                        application?
                    </div>
                    <div class="collapse-content">
                        <p>
                            The Prototypal Inheritance is a feature in
                            javascript used to add methods and properties in
                            objects. It is a method by which an object can
                            inherit the properties and methods of another
                            object. Traditionally, in order to get and set the{" "}
                            <code>[[Prototype]]</code> of an object, we use{" "}
                            <code>getPrototypeOf</code> and Object
                            {/* Object. getPrototypeOf and Object */}
                        </p>
                    </div>
                </div>
                <div
                    tabindex="0"
                    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                >
                    <div class="collapse-title text-xl font-medium">
                        Why you do not set the state directly in React. For
                        example, if you have{" "}
                        <code>
                            const [products, setProducts] = useState([])
                        </code>
                        . Why you do not set <code>products = [...]</code>{" "}
                        instead, you use the <code>setProducts</code>
                    </div>
                    <div class="collapse-content">
                        <p>
                            By using <code>useState([])</code> the components
                            will re-render. but if we will use{" "}
                            <code>products = [...]</code> the components will no
                            render.
                        </p>
                    </div>
                </div>
                <div
                    tabindex="0"
                    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                >
                    <div class="collapse-title text-xl font-medium">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content">
                        <p>
                            Unit testing ensures that all code meets quality
                            standards before it's deployed. This ensures a
                            reliable engineering environment where quality is
                            paramount. Over the course of the product
                            development life cycle, unit testing saves time and
                            money, and helps developers write better code, more
                            efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
