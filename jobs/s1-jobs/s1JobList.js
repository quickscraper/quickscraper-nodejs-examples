const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();
(async () => {
	try {
		const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
		QuickScraperClient.setAccessToken(ACCESS_TOKEN);
		const response = await QuickScraperClient.getData("https://www.s1jobs.com/jobs/?Keywords=&ContractOrPermanent=Permanent&AgencyOrEmployer=E&has_video=&FullOrPartTime=&Salary.BasePayL=0&Salary.BasePayH=0&SpecialismList=&JobLocation.City=&CompanyName=&CoreSkillList=Accountancy&sort=newest&JobWorkingLocation=&page=2&Distance=&defaultSearch=1",
			{
				parserSubscriptionId: 'f17cba76-7db1-57de-ada9-6fcb6c725632'
			});
		console.log(JSON.stringify(response.data));
	} catch (error) {
		console.log("error ", error);
	}
})();