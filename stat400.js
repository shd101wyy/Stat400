
// calculate mean
function mean(list_data)
{
	var result = 0;
	for(var i = 0; i < list_data.length; i++)
	{
		result += list_data[i];
	}
	return result/list_data.length
}

// calculate sample variance
function sampleVariance(list_data)
{
	var m = mean(list_data);
	var result = 0;
	for(var i = 0; i < list_data.length; i++)
	{
		result+= Math.pow(list_data[i] - m, 2);
	}
	return result/(list_data.length-1);
}
// calculate sample standard deviation
function sampleStandardDeviation(list_data)
{
	var m = mean(list_data);
	var result = 0;
	for(var i = 0; i < list_data.length; i++)
	{
		result+= Math.pow(list_data[i] - m, 2);
	}
	return Math.sqrt(result/(list_data.length-1));
}



// calculate test statistics for two variables
function testStatistic2_populationVarianceNotSame (sample_mean1, sample_standard_deviation1, sample_size1, sample_mean2, sample_standard_deviation2, sample_size2)
{
	return (sample_mean1 - sample_mean2)/ Math.sqrt(
		(((sample_size1-1)*Math.pow(sample_standard_deviation1, 2) + (sample_size2-1)*Math.pow(sample_standard_deviation2, 2)) / (sample_size1 + sample_size2 - 2))
		* (1/sample_size1 + 1/sample_size2)
		);

}

function testStatistic2_populationVarianceSame(sample_mean1, sample_standard_deviation1, sample_size1, sample_mean2, sample_standard_deviation2, sample_size2)
{
	return (sample_mean1 - sample_mean2)/Math.sqrt(
							Math.pow(sample_standard_deviation1, 2)/sample_size1 + 
							Math.pow(sample_standard_deviation2, 2)/sample_size2
		);
}


console.log(mean([0.28, 0.01, 0.13, 0.33, -0.03, 0.07, -0.18, -0.14,
				  -0.33, 0.01, 0.22, 0.29, -0.08, 0.23, 0.08, 0.04,
				   -0.3, -0.08, 0.09, 0.7, 0.33, -0.34, 0.5, 0.06]))
console.log(sampleStandardDeviation(
	[0.28, 0.01, 0.13, 0.33, -0.03, 0.07, -0.18, -0.14,
				  -0.33, 0.01, 0.22, 0.29, -0.08, 0.23, 0.08, 0.04,
				   -0.3, -0.08, 0.09, 0.7, 0.33, -0.34, 0.5, 0.06]
	))




