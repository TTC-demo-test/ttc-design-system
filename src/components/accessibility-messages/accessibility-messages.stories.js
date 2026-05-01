export default {
    title: 'Components/Accessibility Messages'
}

export const AccessibilityMessages = () => `
    <div class="accessibility-notice" style="background:#E6F1FB;border-left:3px solid #185FA5;border-radius:0 4px 4px 0;padding:14px 20px;margin:16px 0;">

  <!-- Body Copy -->
  If you require any documents on this page in an accessible format, please contact us:

  <p style="margin:10px 0 0 0;">

    <span aria-hidden="true">✉</span>
    <a href="mailto:help@tridenttech.edu"
       aria-label="[[f13e458f8508bbe328a8f475f315dd9d]]"
       style="color:#185FA5;text-decoration:underline;">
      help@tridenttech.edu
    </a>

    <br />

	<ouc:if test="$0c52be003d56581b49ddaa7a4dfb308e != ''">
	  <span aria-hidden="true">☏</span>
	  <span role="text" aria-label="[[de9d0a26d794a697d0ad9999e482cdd8]]">
		843-111-2222
	  </span>
	</ouc:if>

  </p>

</div>
`