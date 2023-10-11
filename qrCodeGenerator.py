import qrcode
import hashlib
import time


def generate_hash_value(roll_number):
    # Combine roll number with current Unix time and hash it
    input_data = f"{roll_number}{int(time.time())}"
    hash_value = hashlib.md5(input_data.encode()).hexdigest()
    return hash_value


def generate_qr_code(roll_number, person_name, date):
    # Generate the hash_value using the roll number and timestamp
    hash_value = generate_hash_value(roll_number)

    # Combine the information into a single string
    qr_data = f"Name: {person_name}\nRoll Number: {roll_number}\nDate: {date}\nHash: {hash_value}"

    # Create a QR code instance
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )

    # Add the data to the QR code
    qr.add_data(qr_data)
    qr.make(fit=True)

    # Create an Image object from the QR code
    qr_image = qr.make_image(fill_color="black", back_color="white")

    # Save the QR code image with the filename as the roll number
    image_file = f"{roll_number}.png"
    qr_image.save(image_file)


# Example usage
person_name = "John Doe"
roll_number = "XYZ2020###"
date = "{Month}-{Year}"

generate_qr_code(roll_number, person_name, date)
