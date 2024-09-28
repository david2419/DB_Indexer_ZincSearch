package config

import "github.com/spf13/viper"

type Config struct {
	Port       string
	User       string
	Password   string
	DB_Index   string
	Cors_Route string
}

func ReadConfig() (*Config, error) {
	viper.SetConfigName("configuration")
	viper.AddConfigPath(".")
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}

	config := &Config{
		Port:       viper.GetString("port"),
		User:       viper.GetString("userZS"),
		Password:   viper.GetString("password"),
		DB_Index:   viper.GetString("db_Index"),
		Cors_Route: viper.GetString("cors_route"),
	}

	println(config.User)
	println(config.Password)
	println(config.Port)
	println(config.DB_Index)

	return config, nil
}
