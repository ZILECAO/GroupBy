def email_text(url, gid, index):
        contents = f"""<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;"><head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- utf-8 works for most cases -->
            <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Forcing initial-scale shouldn't be necessary -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Use the latest (edge) version of IE rendering engine -->
            <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
            <title style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
        </head>
        <body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #222222;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;font-family: 'Montserrat', sans-serif;font-weight: 400;font-size: 15px;line-height: 1.8;color: rgba(0,0,0,.4);height: 100% !important;width: 100% !important;">
            <center style="width: 100%;background-color: #f1f1f1;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <div style="display: none;font-size: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;mso-hide: all;font-family: sans-serif;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
              &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="email-container">
                <!-- BEGIN BODY -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                <tbody><tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <td class="bg_white logo" style="padding: 1em 2.5em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                    <h1 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Playfair Display', serif;color: #000000;margin-top: 0;margin: 0;"><a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #000;font-size: 20px;font-weight: 700;text-transform: uppercase;font-family: 'Montserrat', sans-serif;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Tron.network_logo.svg/2560px-Tron.network_logo.svg.png" style="height: 75px"></a></h1>
                  </td>
                  </tr><!-- end tr -->
                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <td valign="middle" class="hero" style="background-color: black; background-size: cover;height: 400px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;position: relative;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                    <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                        <tbody><tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                <div class="text" style="padding: 0 3em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: rgba(255,255,255,1);">
                                    <h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">You have been invited to complete a group Go Dutch order (Group ID: {gid})</h2>
                                    <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Please press the button below to proceed</p>
        <br>
                                    <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><a href="{url}{gid}?index={index}" style="border-style: solid; -ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #ffffff;padding: 10px 15px;border-radius: 30px;border-color: #ffffff; background: #000000;">Pay now</a></p><p> {url}{gid}?index={index}</p>
                                </div>
                            </td>
                        </tr>
                    </tbody></table>
                  </td>
                  </tr><!-- end tr -->
                  <!-- end:tr -->
              <!-- 1 Column Text + Button : END -->
        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <td class="bg_white logo" style="padding: 1em 2.5em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                    <h1 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Playfair Display', serif;color: #000000;margin-top: 0;margin: 0;"><a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #000;font-size: 20px;font-weight: 700;text-transform: uppercase;font-family: 'Montserrat', sans-serif;">
        <br>
            <br>
        </a></h1>
                  </td>
                  </tr>
              </tbody></table>
            </div>
          </center>
        </body></html>
        """
        return contents

def response_text(gid, key):
        content = f"""<body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #222222;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;font-family: 'Montserrat', sans-serif;font-weight: 400;font-size: 15px;line-height: 1.8;color: rgba(0,0,0,.4);height: 100% !important;width: 100% !important;">
	<center style="width: 100%;background-color: #f1f1f1;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <div style="display: none;font-size: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;mso-hide: all;font-family: sans-serif;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
      ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
    </div>
    <div style="max-width: 600px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="email-container">
    	<!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
      	<tbody><tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <td class="bg_white logo" style="padding: 1em 2.5em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            <h1 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Playfair Display', serif;color: #000000;margin-top: 0;margin: 0;"><a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #000;font-size: 20px;font-weight: 700;text-transform: uppercase;font-family: 'Montserrat', sans-serif;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Tron.network_logo.svg/2560px-Tron.network_logo.svg.png" style="height: 75px"></a></h1>
          </td>
	      </tr><!-- end tr -->
				<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <td valign="middle" class="hero" style="background-color: black; background-size: cover;height: 400px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;position: relative;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
            	<tbody><tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            		<td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            			<div class="text" style="padding: 0 3em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: rgba(255,255,255,1);">
            				<h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Thanks for completing the group order (Group ID: {gid})! </h2>
            				<h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Here is your product:</h2>
            				
            				<p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Steam CDKey: {key}</p>
            			</div>
            		</td>
            	</tr>
            </tbody></table>
          </td>
	      </tr><!-- end tr -->
	      <!-- end:tr -->
      <!-- 1 Column Text + Button : END -->
<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <td class="bg_white logo" style="padding: 1em 2.5em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            <h1 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Playfair Display', serif;color: #000000;margin-top: 0;margin: 0;"><a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #000;font-size: 20px;font-weight: 700;text-transform: uppercase;font-family: 'Montserrat', sans-serif;">
<br>
    <br>
</a></h1>
          </td>
	      </tr>
      </tbody></table>
    </div>
  </center>
</body>"""
        return content