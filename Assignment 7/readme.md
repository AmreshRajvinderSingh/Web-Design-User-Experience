# Web Development Assignment - Calculator and Stopwatch

## Part A: Calculator Web Application

### Login Page

The first page is the login page with four fields and a login button:

- Email
- User Name
- Password
- Confirm Password
- Login button (Initially disabled)

#### Field Validations:

1. **Null Checks:**
   - All fields must be non-null.

2. **Special Characters Check:**
   - Fields must not contain special characters.

3. **Length Checks:**
   - Implement minimum and maximum length checks for each field.

4. **Custom Validation:**
   - Email field must accept only northeastern email IDs.

#### Error Display:

- Display proper error messages below each field highlighted in red.

### Redirect:

- On successful validation, redirect to the second page.

### Second Page

The second page displays the logged-in user name and includes two input fields for numbers (labeled Number 1 and Number 2), and four buttons for operations (Add, Subtract, Multiply, and Divide).

#### Input Field Validations:

1. **Number Validation:**
   - Allow only numbers in the input fields.

2. **Null Checks:**
   - Fields must be non-null.

3. **Special Character Check:**
   - Fields must not contain special characters.

4. **Infinite Value Check:**
   - Prevent infinite values.

#### Operation Buttons:

- All four operations (Add, Subtract, Multiply, Divide) must be handled using a single arrow function.

#### Result Display:

- Display the result in a non-editable field below the buttons.

### Basic CSS:

- Implement basic CSS for styling on both pages.

## Part B: Stopwatch Web Application

### Single-Page Application

The stopwatch application includes:

- One label displaying time in "HH:MM:SS" format (non-editable).
- Three buttons: Start,
