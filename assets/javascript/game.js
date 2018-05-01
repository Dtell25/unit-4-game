

//enter page??
// press enter to start game 
// Variables:
			// Win Variable - 0
			// Loss Variable - 0
			// Number to achieve - a random number between 19 and 120
			// Total score - 0
			// CrystalANumber - random number between 1 and 12
			// CrystalBNumber - random number between 1 and 12
			// CrystalCNumber - random number between 1 and 12
			// CrystalDNumber - random number between 1 and 12
            //========================================================
           
            //========================================================
			// On page load

			// Call/Run the updateVariablesOnPage function

			// On crystal button click:
				// Add crystal random number to total score
				// Update/Put the total score on the page
				// Check win and lose logic
					// If Total score === Number to achieve
						// win variable++
						// reset total score to 0
						// set number to achieve to be a new random number between 19 and 120
						// reset each one of the crystal numbers to be a new random number between 1 and 12
						// Call/Run the updateVariablesOnPage function
					// If Total score > Number to achieve
						// loss variable++
						// reset total score to 0
						// set number to achieve to be a new random number between 19 and 120
						// reset each one of the crystal numbers to be a new random number between 1 and 12
						// Call/Run the updateVariablesOnPage function
					// If total score < number to achieve
						// Nothing

			// Functions
				// updateVariablesOnPage:
					// Update/Put the win variable on the page
					// Update/Put the lose variable on the page
					// Update/Put the total score variable on the page
					// Update/Put the random number variable on the page