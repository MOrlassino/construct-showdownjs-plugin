"use strict";

{
	C3.Plugins.StraniAnelli_Showdown.Exps =
	{
		MakeHtml(text) {
			const converter = new showdown.Converter();
      const html = converter.makeHtml(text);
			return html;
		}
	};
}
