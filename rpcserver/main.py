import time
from smtplib import SMTPException

import smtplib
## email.mime subclasses
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from datetime import datetime

TRON_GRID_KEY = 'b21976bc-411c-4841-89b7-8fb0d28793d8'

import requests
from secrets import PUBLIC_KEY, PRIVATE_KEY, gmail_password, decrypt_email, product_data
from email_data import email_text, response_text


group_order = dict()


def listener():
    url = "https://api.shasta.trongrid.io/v1/contracts/TXMydeysDCo4R5KNUpgypDQ6DntCvDioxH/transactions?only_confirmed=true"

    headers = {
        'Content-Type': "application/json",
        'TRON-PRO-API-KEY': TRON_GRID_KEY
    }

    payload = {
        'to_address': ''
    }

    # while True:
    #     time.sleep(3)
    print('polled at ', datetime.now())
    # response = requests.request("POST", url, data=json.dumps(payload), headers=headers).json()
    response = requests.request("GET", url, headers=headers).json()
    print(response['success'])
    try:
        emails = list()
        for encrypted_email in response['data']['emails']:
            emails.append(em)
    except Exception:
        pass

base_url = 'localhost:3000/payment/'


def connect_to_gmail(password):
    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login('brdk@seas.upenn.edu', password)
        return server
    except Exception as e:
        print(e)
        print('Something went wrong...')


def group_send_email(emails, server):
    for address, gid, index in emails:
        msg = MIMEMultipart()
        msg['Subject'] = 'You have been invited to complete a GroupBy Go Dutch order'
        msg['From'] = 'brdk@seas.upenn.edu'
        msg['To'] = address
        msg.add_header('Content-Type', 'text/html')

        msg.attach(MIMEText(email_text(base_url, gid, index), "html"))
        send_email(address, gid, index, msg, server)


def send_email(address, gid, index, msg, server):
    try:
        server.sendmail(msg['From'], msg['To'], msg.as_string())
        print('sent successful')
    except SMTPException:
        print("Error: unable to send email")


def send_reward(address, gid, server):
    try:
        msg = MIMEMultipart()
        msg['Subject'] = 'Thanks for completing your  GroupBy order! Here is your product'
        msg['From'] = 'brdk@seas.upenn.edu'
        msg['To'] = address
        msg.add_header('Content-Type', 'text/html')

        msg.attach(MIMEText(response_text(gid, product_data), "html"))
        server.sendmail(msg['From'], msg['To'], msg.as_string())
        print('sent successful')
    except SMTPException:
        print("Error: unable to send email")


def main():
    server = connect_to_gmail(gmail_password)
    if server is None:
        return
    # listener()
    group_send_email([('yihechen@seas.upenn.edu', 12, 3)], server)

    server.close()


if __name__ == '__main__':
    main()
